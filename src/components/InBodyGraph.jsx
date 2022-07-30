import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const InBodyGraphTest = ({ data, range }) => {
  if (data.length === 0) return;
  const styles = {
    fontFamily: "Pretendard",
    textAlign: "center"
  };

  // 레이어 디자인
  const refsLayer = props => {
    return (
      <g transform="translate(0,0)">
        <rect
          y={props.yScale(range.max)}
          width="100%"
          height={props.yScale(range.upper) - props.yScale(range.max)}
          fill="#FAEBFF"
        />
        <rect
          y={props.yScale(range.upper)}
          width="100%"
          height={props.yScale(range.lower) - props.yScale(range.upper)}
          fill="#EEF7FE"
        />
        <rect
          y={props.yScale(range.lower)}
          width="100%"
          height={props.yScale(0) - props.yScale(range.lower)}
          fill="#F7F7F8"
        />
      </g>
    );
  };
  const TotalLabels = ({ bars, yScale }) => {
    const labelMargin = 20;
    return bars.map(({ data: { data, indexValue }, x, width, color }, i) => {
      const yValue = Object.keys(data)
        //filter out whatever your indexBy value is
        .filter(key => key !== "x")
        .reduce((a, key) => a + data[key], "");

      return (
        <g
          transform={`translate(${x}, ${yScale(yValue - yValue * 0.3)})`}
          key={`${indexValue}-${i}`}
        >
          <circle cx={width / 2} r="3.2%" fill="#FEFEFE" />
          <text
            // add any class to the label here
            className="bar-total-label"
            x={width / 2}
            y={labelMargin / 40}
            textAnchor="middle"
            alignmentBaseline="central"
            stroke={color}
            fontWeight="100"
            fontSize="0.87rem"
          >
            {yValue}
          </text>
        </g>
      );
    });
  };

  return (
    <div
      style={{
        ...styles,
        height: "220px", // this.getChartHeight(),
        width: "100%" // this.getChartWidth()
      }}
    >
      <ResponsiveBar
        margin={{
          top: 0,
          right: 13,
          left: 0,
          bottom: 60
        }}
        theme={{
          textColor: "#363636",
          fontSize: "0.7em"
        }}
        data={data}
        maxValue={range.max}
        // change to {range.min} later
        // minValue={range.min}
        keys={["y"]}
        indexBy="x"
        colors={props => {
          if (props.data.y > range.upper) {
            return "#a160fb";
          } else if (props.data.y < range.lower) {
            return "#363636";
          } else {
            return "#0e0aff";
          }
        }}
        padding={0.91}
        borderRadius={"7px"}
        axisLeft={null}
        axisBottom={{
          tickSize: 0
        }}
        layers={[
          refsLayer,
          "markers",
          "axes",
          "areas",
          "bars",
          "slices",
          "dots",
          "legends",
          TotalLabels
        ]}
        tooltip={e => ""}
        enableLabel={false}
      />
    </div>
  );
};
export default InBodyGraphTest;
