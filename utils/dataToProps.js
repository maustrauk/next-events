import fs from 'fs/promises';
import path from 'path';

export default async function dataToProps(context) {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

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

    return {
        props: {
            dummyData: data.events,
        },
        revalidate: 600,
    };
}