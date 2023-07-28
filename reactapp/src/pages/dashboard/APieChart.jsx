import React from 'react'
import { ResponsivePie } from "@nivo/pie";
import {tokens} from "../../theme";
import { useTheme } from '@emotion/react';
import { Box} from "@mui/material";
import Header from "../../components/Header";
import {getStatusDetails} from '../../services/user-service';
import { useEffect } from 'react';

const APieChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [graphData,setGraphData] = React.useState([]);
    useEffect(()=>{
        getStatusDetails()
        .then((data)=>{
            console.log("data graph",data);
            setGraphData(data);
        })
    },[])

    const mockPieData = [
        {
          id: "Users",
          label: "users",
          value: graphData.totalUsers,
          color: "hsl(104, 70%, 50%)",
        },
        {
          id: "Workouts",
          label: "workouts",
          value: graphData.totalWorkouts,
          color: "hsl(104, 70%, 50%)",
        },
        {
          id: "Exercises",
          label: "Exercises",
          value: graphData.totalExercises,
          color: "hsl(162, 70%, 50%)",
        },
        {
          id: "Sets",
          label: "Sets",
          value: graphData.totalSets,
          color: "hsl(291, 70%, 50%)",
        },
        {
          id: "Goals",
          label: "Goals",
          value: graphData.totalGoals,
          color: "hsl(229, 70%, 50%)",
        }
        
      ];
 
  return (
    <div className='app'>
        
        <main className='content'>
        <Box m="20px">
    <Header title="Pie Chart" subtitle="overview of workouts " />
    <Box height="75vh">
    <ResponsivePie
    data={mockPieData}
    margin={{ top: 20, right: 80, bottom: 100, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                0.2
            ]
        ]
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                2
            ]
        ]
    }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    fill={[
        {
            match: {
                id: 'ruby'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'c'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'go'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'python'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'scala'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'lisp'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'elixir'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'javascript'
            },
            id: 'lines'
        }
    ]}
    legends={[
        {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#000'
                    }
                }
            ]
        }
    ]}
/>
</Box>
</Box>
</main>
</div>
  )
}

export default APieChart