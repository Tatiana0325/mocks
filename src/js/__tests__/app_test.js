import {getLevel} from '../src/js/app';
import fetchData from '../src/js/http';

jest.mock('../src/js/http');

beforeEach(() => {
    jest.resetAllMocks();
});

test('check getLevel function', () => {
    fetchData.mockReturnValue(JSON.stringify({}));

    getLevel(1);
    expect(fetchData).toBeCalledWith(`https://server/user/1`);
});