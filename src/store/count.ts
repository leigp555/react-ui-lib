import {createSlice, createAsyncThunk,PayloadAction, Draft} from '@reduxjs/toolkit'

//store的类型
export type CountStore = {
    num: number
}

//mock一个请求
const ajax=(url:string)=>{
    return new Promise((resolve,reject)=>{
        if(url==='/test'){
            setTimeout(()=>{
                resolve({data:20})
            },2000)
        }
    })
}


export const resetAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount) => {
        const response = await ajax("/test") as {data:number};
        return response.data;
    }
);



//创建一个store切片
const countStore = createSlice({
    name: 'counter',
    initialState() {
        return {
            num: 0
        } as CountStore
    },
    reducers: {
        incremented(state: Draft<CountStore>, action: PayloadAction<number>){
            state.num += action.payload
        },
        decremented(state: Draft<CountStore>, action: PayloadAction<number>) {
            state.num -= action.payload
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(resetAsync.fulfilled, (state, action) => {
            // Add user to the state array
            state.num=action.payload
        })
    },
})


//actions
export const {incremented, decremented} = countStore.actions
export default countStore.reducer



