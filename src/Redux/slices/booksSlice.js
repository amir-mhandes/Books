import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    data: [
        {
            'title': 'book1',
            'author': 'amir'
        },
        {
            'title': 'book2',
            'author': 'amir'
        },
        {
            'title': 'book3',
            'author': 'amir'
        },
        {
            'title': 'book4',
            'author': 'amir'
        },
        {
            'title': 'book5',
            'author': 'amir'
        },
        {
            'title': 'book6',
            'author': 'amir'
        },
    ]
}

const BooksSlice= createSlice({
    name: 'books',
    initialState,
    reducers:{
        addBookSlice: (state, action) => {
            let idx = state.data.findIndex(obj => obj.title === action.payload.title)
            if(idx === -1){
                state.data.push(action.payload)
            }
        }
    }
})

export const {
    addBookSlice
} = BooksSlice.actions;

export default BooksSlice.reducer;