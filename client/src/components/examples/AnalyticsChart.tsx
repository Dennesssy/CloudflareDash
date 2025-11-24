import { AnalyticsChart } from "../AnalyticsChart";

const mockData = [
  { time: "00:00", requests: 1200 },
  { time: "04:00", requests: 800 },
  { time: "08:00", requests: 2400 },
  { time: "12:00", requests: 3200 },
  { time: "16:00", requests: 2800 },
  { time: "20:00", requests: 1600 },
];

export default function AnalyticsChartExample() {
  return (
    <div className="p-8">
      <AnalyticsChart title="Request Traffic (24h)" data={mockData} />
    </div>
  );
}
