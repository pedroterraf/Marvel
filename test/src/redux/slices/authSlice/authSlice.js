import { createSlice } from '@reduxjs/toolkit';
/* import axios from 'axios'; */

export const authSlice = createSlice({
  name: 'character',
  initialState: {
    character: [],
  },
  reducers: {
    setCharacter: (state, action) => {
      state.character = [...action.payload]; 
    },
  },
});

export const { setCharacter } = authSlice.actions;

export default authSlice.reducer;

/* export const fetchDataCharacters = () => async (dispatch) => {
  const apiKey = 'd21bb365ba4ff40132f24c4ad59a1f3c';
  const hash = 'f05d123508f64e411f3846f09b44fe07';
  const URL = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=';

  try {
    const response = await axios.get(`${URL}${apiKey}&hash=${hash}`);

    const characters = response.data.data.results?.map((e) => {
      return {
        id: e?.id,
        name: e?.name,
        image: `${e?.thumbnail.path}.${e?.thumbnail.extension}`,
      };
    });

    console.log('ENTRO');
    dispatch(setCharacter(characters));
  } catch (error) {
    console.error("Error fetching data:", error);
    dispatch(setCharacter([]));
  }
}; */
