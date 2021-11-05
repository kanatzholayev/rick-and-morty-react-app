import React, { useState, useEffect } from "react";
import { getLocationList } from "../../../api";
import LocationList from "./LocationList";
import { Pagination, TextField, Typography } from "@mui/material";
import Spinner from "../../Spinner/Spinner";

const LocationPage = () => {
  const [locationList, setLocationList] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState({
    search: "",
    dimension: "",
    type: "",
  });
  const { search, dimension, type } = filter;

  useEffect(() => {
    setLoading(true);
    let data;
    async function getData() {
      data = await getLocationList(page, search, dimension, type);
      if (data.error) {
        setError(true);
      } else {
        setPageCount(data.info.pages);
        setLocationList(data.results);
        setLoading(false);
        setError(false);
      }
    }
    getData();
  }, [page, search, dimension, type]);

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
      <LocationList characters={locationList} />
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
        Location
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
            <TextField
              label="Type"
              variant="standard"
              className="search-input"
              onChange={handleInputChange}
              value={type}
              name="type"
            />
            <TextField
              label="Dimension"
              variant="standard"
              className="search-input"
              onChange={handleInputChange}
              value={dimension}
              name="dimension"
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

export default LocationPage;
