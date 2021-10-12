const pages =  [
    {
        pageName: "Points",
        renderPage: () => renderPointList(points),
    },
    {
        pageName: "Circles",
        renderPage: () => renderCircleList(circles),
    },
    {
        pageName: "Rectangles",
            renderPage: () => renderRectangleList(rectangles), 
    },
    {
        pageName: "Triangles",
            renderPage: () => renderTriangleList(triangles),
    }
];