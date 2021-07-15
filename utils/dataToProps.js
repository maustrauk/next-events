import fs from 'fs/promises';
import path from 'path';

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
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

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

    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

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