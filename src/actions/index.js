import * as ACTION from './constants';


export const fetchColor = value => ({
    type: ACTION.FETCHCOLOR,
    url: `http://www.thecolorapi.com/id?format=json&named=false&hex=${value}`,
    value
});

export const isLoading = value => ({
    type: ACTION.ISLOADING,
    value
});

export const removeColor = id => ({
    type: ACTION.REMOVECOLOR,
    id
});

export const editColor = id => ({
    type: ACTION.EDITCOLOR,
    id
});

export const replaceColor = (id, value) => ({
    type: ACTION.REPLACECOLOR,
    url: `http://www.thecolorapi.com/id?format=json&named=false&hex=${value}`,
    id,
    value
});

export const clearError = () => ({
    type: ACTION.CLEARERROR
});