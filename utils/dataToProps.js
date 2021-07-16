import fs from 'fs/promises';
import path from 'path';

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);

    return JSON.parse(jsonData);
}

function dataValidation(data) {
    if (!data) {
        return {
            redirect: {
                destination: 'no-data',
            }
        }
    }

    if (data.events.length === 0) {
        return { 
            notFound: true,
        }
    }

    return {};
}

export async function AlldataToProps() {
    const data = await getData();
    const dataValidator = dataValidation(data);

    if(Object.keys(dataValidator).length !== 0) {
        return dataValidator;
    }

    return {
        props: {
            dummyData: data.events,
        },
        revalidate: 600,
    };
}

export async function dataToPropsById(context) {
    const { params } = context;
    const eventId = params.eventId;

    const data = await getData();

    const dataValidator = dataValidation(data);

    if(Object.keys(dataValidator).length !== 0) {
        return dataValidator;
    }

    const loadedEvent = data.events.find(e => e.id === eventId);

    return {
        props: {
            loadedEvent: loadedEvent,
        },
        revalidate: 600,
    };
}

export async function propsPath() {
    const data = await getData();
    const ids = data.events.map(e => e.id);

    const params = ids.map(id => ({params: {eventId: id}}));
    
    return {
        paths: params,
        fallback: false,
    }
}