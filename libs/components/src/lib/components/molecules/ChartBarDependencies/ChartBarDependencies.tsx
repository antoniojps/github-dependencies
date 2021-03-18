import React from 'react';
import styles from './ChartBarDependencies.module.scss';
import { ResponsiveBar, BarItemProps } from '@nivo/bar';
import { getOrdinalColorScale } from '@nivo/colors';

type DataItem = {
  value: number;
  label: string;
};

type Props = {
  data: DataItem[];
};

const BarComponent = (props: BarItemProps) => {
  return (
    <g transform={`translate(${props.x},${props.y})`}>
      <rect x={-3} y={7} width={props.width} height={props.height} fill="rgba(0, 0, 0, .07)" />
      <rect width={props.width} height={props.height} fill={props.color} />
      <rect
        x={props.width - 5}
        width={5}
        height={props.height}
        fill={props.borderColor}
        fillOpacity={0.2}
      />
      <text
        x={props.width - 16}
        y={props.height / 2}
        textAnchor="end"
        dominantBaseline="central"
        fill="black"
        style={{
          fontWeight: 'bold',
          fontSize: 14,
          fontFamily: 'monospace',
        }}
      >
        {props.data.indexValue}
      </text>
      <text
        x={15}
        y={props.height / 2}
        textAnchor="start"
        dominantBaseline="central"
        fill="rgba(0,0,0,0.5)"
        style={{
          fontWeight: 'bold',
          fontSize: 14,
          fontFamily: 'monospace',
        }}
      >
        {props.data.value}
      </text>
    </g>
  );
};

export const ChartBarDependencies = ({ data = [] }: Props) => {
  return (
    <div className={styles.wrapper} style={{ height: `${data.length * 64}px` }}>
      <ResponsiveBar
        layout="horizontal"
        margin={{ top: 10, right: 15, bottom: 30, left: 15 }}
        data={data}
        indexBy="label"
        valueScale={{ type: 'symlog' }}
        colors={getOrdinalColorScale({ scheme: 'set3' }, 'index')}
        enableGridX
        enableGridY={false}
        axisTop={{
          format: '~s',
        }}
        axisBottom={{
          format: '~s',
        }}
        axisLeft={null}
        padding={0.3}
        borderColor={{ from: 'color', modifiers: [['darker', 2.6]] }}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.4]] }}
        isInteractive={false}
        barComponent={BarComponent}
        motionStiffness={170}
        motionDamping={26}
        theme={{
          axis: {
            ticks: {
              line: {
                stroke: 'transparent',
              },
              text: {
                fill: 'rgba(255,255,255,0.2)',
              },
            },
          },
          grid: {
            line: {
              stroke: 'rgba(255, 255, 255, 0.2)',
              strokeWidth: 1,
              strokeDasharray: '4 4',
            },
          },
        }}
        animate
      />
    </div>
  );
};
