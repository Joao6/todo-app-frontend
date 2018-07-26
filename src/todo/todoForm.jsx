import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default props => {
  return (
    <div role="form" className="row todoForm">
      <Grid cols="12 8 10">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Adicione uma tarefa"
            value={props.description}
            onChange={props.handleChange}
            onKeyUp={props.keyHandler}
          />
        </div>
      </Grid>
      <Grid cols="12 4 2">
        <div className="form-group">
          <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
          <IconButton style="info" icon="search" onClick={props.handleSearch} />
          <IconButton
            style="default"
            icon="close"
            onClick={props.handleClear}
          />
        </div>
      </Grid>
    </div>
  );
};
