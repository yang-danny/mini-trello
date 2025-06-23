export const getRandomStatus = () => {
    const statuses = ['Todo', 'Doing', 'Done'];
    return statuses[Math.floor(Math.random() * statuses.length)];
};
