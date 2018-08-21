import {Composer} from './';

const mocks = {
    createPostAsyncMock: jest.fn(() => Promise.resolve()),
    preventDefaultMock:  jest.fn(),
};

const avatar = "google.com.ua";
const currentUserFirstName = "Andrey";
const currentUserLastName = "SS";

const props = {
    addPost: mocks.createPostAsyncMock,
    currentUserFirstName,
    avatar,
};

const testComment = "Hello";
const initialState = {
    comment: '',
};
const mutatedState = {
    comment: testComment,
};

const result = mount(<Composer { ...props } />);
const markup = render(<Composer { ...props } />);

const spies = {
    updateCommentSpy: jest.spyOn(result.instance(), 'onChangeTextArea'),
    submitCommentSpy: jest.spyOn(result.instance(), 'onSubmitForm'),
};

describe('Composer', () => {
    describe(' should have valid markup', () => {
        test('core JSX', () => {
            expect(result.find('section.composer')).toHaveLength(1);
            expect(result.find('form')).toHaveLength(1);
            expect(result.find('textarea')).toHaveLength(1);
            expect(result.find('input')).toHaveLength(2);
            expect(result.find('img')).toHaveLength(1);
        });
        test.only('core JSX', () => {
            expect(result.find('section.composer')).toHaveLength(1);
            expect(result.find('form')).toHaveLength(1);
            expect(result.find('textarea')).toHaveLength(1);
            expect(result.find('input')).toHaveLength(2);
            expect(result.find('img')).toHaveLength(1);
        });
        test.skip('core JSX', () => {
            expect(result.find('section.composer')).toHaveLength(1);
            expect(result.find('form')).toHaveLength(1);
            expect(result.find('textarea')).toHaveLength(1);
            expect(result.find('input')).toHaveLength(2);
            expect(result.find('img')).toHaveLength(1);
        });
    });
    describe(' should have valid props', () => {
        test.only('addPost shoud be an async func', async() => {
            await expect(result.prop('addPost')()).resolves.toBeUndefined();
            console.log(result.prop('currentUserFirstName'));
            expect(typeof result.prop('currentUserFirstName')).toBe('string');
            expect(result.prop('currentUserFirstName')).toBeDefined();
            expect(result.prop('currentUserLastName')).toBeUndefined();
            // expect(result.prop('currentUserLastName')()).toHaveLength(1);
            // expect(result.prop('avatar')).toHaveLength(1);
        });
    });
    describe(' should have valid states', () => {
        test.only('addPost shoud be an async func', () => {
            expect(typeof result.state('comment')).toBe('string');
            expect(typeof result.state('currentUserFirstName')).toBe('string');
            //expect(typeof result.state('currentUserLastName')).toBe('string');
        });
    });
});
