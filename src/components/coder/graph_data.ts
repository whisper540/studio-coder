export default
{
    nodes: [
        {
            type: "UserTask",
            x: 400,
            y: 400,
            properties:{
                statu: "pass"
            },
        },
        {
            id: "node_id_1",
            type: "rect",
            x: 100,
            y: 100,
            text: { x: 100, y: 100, value: "节点1" },
            properties: {},
        },
        {
            id: "node_id_2",
            type: "circle",
            x: 200,
            y: 300,
            text: { x: 300, y: 300, value: "节点2" },
            properties: {},
        },
    ],
    edges: [
        {
            id: "edge_id",
            type: "polyline",
            sourceNodeId: "node_id_1",
            targetNodeId: "node_id_2",
            text: { x: 150, y: 200, value: "连线" },
            startPoint: { x: 100, y: 140 },
            endPoint: { x: 200, y: 250 },
            pointsList: [
                { x: 100, y: 140 },
                { x: 100, y: 200 },
                { x: 200, y: 200 },
                { x: 200, y: 250 },
            ],
            properties: {},
        },
    ],
}
