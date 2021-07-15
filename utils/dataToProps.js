import fs from 'fs/promises';
import path from 'path';

export default async function dataToProps() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    return {
        props: {
            dummyData: data.events,
        }
    };
}