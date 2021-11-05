import React, { useState, useEffect } from "react";
import { getEpisodeList } from "../../../api";
import EpisodeList from "./EpisodeList";
import { Pagination, TextField, Typography } from "@mui/material";
import Spinner from "../../Spinner/Spinner";

const EpisodePage = () => {
  const [episodeList, setEpisodeList] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState({
    search: "",
  });
  const { search } = filter;

  useEffect(() => {
    setLoading(true);
    let data;
    async function getData() {
      data = await getEpisodeList(page, search);
      if(data.error){
        setError(true);
      } else{
      setEpisodeList(data.results);
      setPageCount(data.info.pages);
      setLoading(false);
      setError(false);
    }
    }
    getData();
  }, [page, search]);

  const handleChange = (event, value) => {
    setLoading(true);
    setPage(value);
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    setFilter({ ...filter, [name]: event.target.value });
  };

  const mainInfo = loading ? (
    <Spinner />
  ) : (
    <main>
      <EpisodeList episodeList={episodeList} />
      <Pagination
        className="pagination"
        count={pageCount}
        page={page}
        onChange={handleChange}
      />
    </main>
  )

  return (
    <div className="container main-content">
    <Typography component="h2" variant="h2" sx={{mb: 3}}>
      Episodes
    </Typography>
      <div className="row">
        <div className="filter-panel">
          <aside className="aside">
            <TextField
              label="Name"
              variant="standard"
              className="search-input"
              onChange={handleInputChange}
              value={search}
              name="search"
            />
          </aside>
        </div>
        <div className="characters-panel">
          {error ? <h2>Not Found</h2> : mainInfo}
        </div>
      </div>
    </div>
  );
};

export default EpisodePage;
