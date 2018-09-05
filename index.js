const logger = (strategy, level, message, ...args) => {
    return strategy(level, message, ...args)
};

const logToConsoleStrategy = (level, message) => console[level](message);

logger(
    logToConsoleStrategy,
    'log',
    'log first message to console'
);

const logToDOMStrategy = (level, message, node) => {
    node.innerHTML = `<div class='${level}'>${message}</div>`
};

logger(
    logToDOMStrategy,
    'warn',
    'log second message to dom',
    document.querySelector('#log')
);