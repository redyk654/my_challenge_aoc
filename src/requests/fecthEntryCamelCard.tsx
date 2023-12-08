export async function fetchEntryCamelCard(): Promise<any> {
    const res = await fetch('https://adventofcode.com/2023/day/7/input');
    return await res.json().then((data) => data);

}
