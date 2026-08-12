import { useState, useEffect } from 'react';
import { format, subDays, addDays, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay, parseISO } from 'date-fns';

// Heat levels — linear interpolation from --color-surface to --color-signal,
// so contribution intensity reads as "more brand accent," not GitHub's stock green.
const LEVEL_COLORS = ['#1a2830', '#4c473a', '#7d6644', '#af854e', '#e0a458'];

const WEEKS = 53;

function buildWeeks(contributions) {
  const today = new Date();
  const start = startOfWeek(subDays(today, WEEKS * 7 - 7), { weekStartsOn: 0 });
  const weeks = [];
  let cursor = start;

  for (let i = 0; i < WEEKS; i++) {
    const days = eachDayOfInterval({ start: cursor, end: endOfWeek(cursor, { weekStartsOn: 0 }) });
    weeks.push({
      firstDay: cursor,
      days: days.map((day) => {
        const match = contributions.find((c) => isSameDay(c.date, day));
        return { date: day, count: match ? match.count : null, level: match ? match.level : null };
      }),
    });
    cursor = addDays(cursor, 7);
  }
  return weeks;
}

// One label per week column, shown only on the week a new month begins —
// avoids the drift you get from stepping a fixed +30 days per label.
function monthLabels(weeks) {
  let lastMonth = null;
  return weeks.map((week) => {
    const month = week.firstDay.getMonth();
    if (month === lastMonth) return '';
    lastMonth = month;
    return format(week.firstDay, 'MMM');
  });
}

export default function GithubCalendar({ username }) {
  const [contributions, setContributions] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((json) => {
        if (cancelled || !Array.isArray(json.contributions)) return;
        setContributions(json.contributions.map((c) => ({ date: parseISO(c.date), count: c.count, level: c.level })));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [username]);

  if (!contributions) return null;

  const weeks = buildWeeks(contributions);
  const labels = monthLabels(weeks);
  const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

  return (
    <div className="bg-panel border border-white/8 rounded-2xl p-5 md:p-6 overflow-x-auto">
      <div className="flex gap-2 min-w-max">
        <div className="flex flex-col justify-between pt-4 pr-1">
          {dayLabels.map((label, i) => (
            <span key={i} className="text-[10px] text-muted h-[11px] leading-[11px]">
              {label}
            </span>
          ))}
        </div>
        <div>
          <div className="flex gap-[3px] mb-1">
            {labels.map((label, i) => (
              <span key={i} className="w-[11px] text-[10px] text-muted flex-shrink-0">
                {label}
              </span>
            ))}
          </div>
          <div className="flex gap-[3px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.days.map((day, di) => (
                  <div
                    key={di}
                    className="w-[11px] h-[11px] rounded-[2px]"
                    style={{ backgroundColor: day.level === null ? 'transparent' : LEVEL_COLORS[day.level] }}
                    title={day.count === null ? undefined : `${format(day.date, 'MMM d, yyyy')}: ${day.count} contribution${day.count === 1 ? '' : 's'}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1.5 mt-4 text-[10px] text-muted">
        <span>Less</span>
        {LEVEL_COLORS.map((color, i) => (
          <span key={i} className="w-[11px] h-[11px] rounded-[2px]" style={{ backgroundColor: color }} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
