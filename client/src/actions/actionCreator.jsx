
export function createGroup(index) {
    return {
        type: 'Create_Group',
        index
    };
}
export function joinGroup(index) {
    return {
        type: 'Join_Group',
        index
    };
}
