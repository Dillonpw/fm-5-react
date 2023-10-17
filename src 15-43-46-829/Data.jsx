import reactionIcon from './assets/images/icon-reaction.svg';
import memoryIcon from './assets/images/icon-memory.svg';
import verbalIcon from './assets/images/icon-verbal.svg';
import visualIcon from './assets/images/icon-visual.svg';

const iconForCategory = (category) => {
    switch (category.toLowerCase()) {
        case 'reaction':
            return reactionIcon;
        case 'memory':
            return memoryIcon;
        case 'verbal':
            return verbalIcon;
        case 'visual':
            return visualIcon;
        default:
            return null;
    }
};

const styleForCategory = (category) => {
    switch (category.toLowerCase()) {
        case 'reaction':
            return {
                backgroundColor: 'hsla(0, 100%, 67%, .1)',
                color: 'hsl(0, 100%, 67%)',
                fontSize: '12px',
                paddingLeft: '1rem'
            };
        case 'memory':
            return {
                backgroundColor: 'hsla(39, 100%, 56%, .1)',
                color: 'hsla(39, 100%, 56%)',
                fontSize: '12px',
                paddingLeft: '1rem'
            };
        case 'verbal':
            return {
                backgroundColor: 'hsla(166, 100%, 37%, .1)',
                color: 'hsla(166, 100%, 37%)',
                fontSize: '12px',
                paddingLeft: '1rem'
            };
        case 'visual':
            return {
                backgroundColor: 'hsla(234, 85%, 45%, .1)',
                color: 'hsla(234, 85%, 45%)',
                fontSize: '12px',
                paddingLeft: '1rem'
            };
        default:
            return {};
    }
};

const Data = () => {
    const jsonData = [
        {
            category: 'Reaction',
            score: 80,
            icon: './assets/images/icon-reaction.svg',
        },
        {
            category: 'Memory',
            score: 92,
            icon: './assets/images/icon-memory.svg',
        },
        {
            category: 'Verbal',
            score: 61,
            icon: './assets/images/icon-verbal.svg',
        },
        {
            category: 'Visual',
            score: 72,
            icon: './assets/images/icon-visual.svg',
        },
    ];

    const textStyle = { color: 'grey', fontSize: '16px', fontWeight: '700' };
    const scoreStyle = { color :'black', fontWeight: '700'}
    return (
        <div className="data">
            <h1 className="summary">Summary</h1>

            {jsonData.map((test, index) => (
                <div
                    key={index}
                    className="tests"
                    style={styleForCategory(test.category)}
                >
                    <h2 className="category">
                        <img
                            src={iconForCategory(test.category)}
                            alt={test.category}
                        />
                        {test.category}
                    </h2>
                    <p style={textStyle}>
                        <span style={scoreStyle}>{test.score}</span> / 100</p>
                </div>
            ))}

            <button className="btn">Continue</button>
        </div>
    );
};

export default Data;
