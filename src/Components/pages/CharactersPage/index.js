import React, { useState, useEffect } from "react";
import { getCharactersList } from "../../../api";
import CharacterList from "./CharacterList/";
import {
  Pagination,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Typography,
} from "@mui/material";
import Spinner from "../../Spinner/Spinner";

const CharactersPage = () => {
  const [charactersList, setCharactersList] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState({
    search: "",
    status: "",
    species: "",
    gender: "",
  });

  const { search, status, species, gender } = filter;

  useEffect(() => {
    setLoading(true);
    let data;
    async function getData() {
      data = await getCharactersList(page, search, status, gender, species);
      if (data.error) {
        setError(true);
      } else {
        setPageCount(data.info.pages);
        setCharactersList(data.results);
        setLoading(false);
        setError(false);
      }
    }
    getData();
  }, [page, search, status, gender, species]);

  const handleChange = (event, value) => {
    setLoading(true);
    setPage(value);
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    setFilter({ ...filter, [name]: event.target.value });
  };

  let mainInfo = loading ? (
    <Spinner />
  ) : (
    <main>
      <CharacterList characters={charactersList} />
      <Pagination
        className="pagination"
        count={pageCount}
        page={page}
        onChange={handleChange}
      />
    </main>
  );

  return (
    <div className="container main-content">
      <Typography component="h2" variant="h2" sx={{ mb: 3 }}>
        Characters
      </Typography>
      <div className="row">
        <div className="filter-panel">
          <aside className="aside">
            <TextField
              label="Search"
              variant="standard"
              className="search-input"
              onChange={handleInputChange}
              value={search}
              name="search"
            />
            <FormControl className="form-control" fullWidth>
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                value={status}
                name="status"
                label="Status"
                onChange={handleInputChange}
              >
                <MenuItem value="">Unset</MenuItem>
                <MenuItem value="alive">Alive</MenuItem>
                <MenuItem value="dead">Dead</MenuItem>
                <MenuItem value="unknown">Unknown</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="form-control" fullWidth>
              <InputLabel id="species-label">Species</InputLabel>
              <Select
                labelId="species-label"
                value={species}
                name="species"
                label="Species"
                onChange={handleInputChange}
              >
                <MenuItem value="">Unset</MenuItem>
                <MenuItem value="human">Human</MenuItem>
                <MenuItem value="alien">Alien</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="form-control" fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                value={gender}
                name="gender"
                label="Gender"
                onChange={handleInputChange}
              >
                <MenuItem value="">Unset</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="genderless">Genderless</MenuItem>
                <MenuItem value="unknown">Unknown</MenuItem>
              </Select>
            </FormControl>
          </aside>
        </div>
        <div className="characters-panel">
          {error ? <h2>Not Found</h2> : mainInfo}
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;
