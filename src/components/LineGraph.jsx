import React from "react";
import { ResponsiveLine } from "@nivo/line";

const LineGraph = ({ progress }) => {
  if (progress.length === 0) return;

  const getMinValue = () => {
    let minValue = Math.min(...progress[0].data.map(e => e.y));
    return minValue - 20 < 0 ? 0 : minValue - 20;
  };

  const DrawGrid = props => {
    return props.points.map(item => {
      return (
        <line
          key={`${item.x}-${item.y}`}
          x1={`${item.x}`}
          y1={`${props.innerHeight}`}
          x2={`${item.x}`}
          y2={`${item.y + 10}`}
          stroke="#606060"
          strokeDasharray="2"
        />
      );
    });
  };

  return (
    <ResponsiveLine
      curve="monotoneX"
      data={progress}
      lineWidth={3}
      margin={{ top: 30, right: 25, bottom: 36, left: 35 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: getMinValue(),
        max: "100"
      }}
      enableGridX={false} // 세로(X) 축
      enableGridY={true} // 가로(Y) 축
      gridYValues={5} // 가로 축 선 갯수 지정
      yFormat=" >-.0f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 36,
        legendPosition: "middle"
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5, // 축 설정
        tickSize: 0, // 축 굵기
        tickPadding: 15 // 축 padding
      }}
      theme={{
        textColor: "#16E4CC",
        fontSize: "16px",

        axis: {
          tickColor: "#eee",
          ticks: {
            text: {
              fontSize: "12px",
              fill: "black"
            }
          },
          legend: {
            text: {
              fill: "#aaaaaa"
            }
          }
        },
        grid: {
          line: {
            strokeWidth: 1
          }
        }
      }}
      gridXValues={50}
      colors={["#16E4CC", "#929292"]}
      pointBorderWidth={6}
      pointBorderColor={{
        from: "color",
        modifiers: [["brighter", 5]]
      }}
      enablePointLabel={true}
      pointLabelYOffset={-15} // 수치 위치
      pointSize={15} //
      enableArea={true}
      areaOpacity={0.07} // 영역 색 불투명도
      useMesh={true}
      areaBaselineValue={getMinValue()} // 영역 색 시작 위치
      legends={[]}
      tooltip={e => {
        return null;
      }} // 마우스 hover 할 때
      layers={[
        "grid",
        "markers",
        "axes",
        "areas",
        "lines",
        "slices",
        "points",
        "mesh",
        "legends",
        DrawGrid
      ]}
    />
  );
};
export default LineGraph;
