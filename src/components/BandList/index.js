import React, { Fragment, useEffect } from "react";

import Band from "../Band";
import Loader from "../Loader";

import { useSelector } from "react-redux";
import useActions from "../../hooks/useActions";

import * as bandsSelectors from "../../selectors/bands";
import * as bandsActions from "../../actions/bands";

const BandList = () => {
  const bands = useSelector(bandsSelectors.getBands);
  const error = useSelector(bandsSelectors.getError);
  const isLoading = useSelector(bandsSelectors.isBandListLoading);

  const fetchBands = useActions(bandsActions.fetchBands);

  useEffect(() => {
    fetchBands();
  }, [fetchBands]);

  const listBands = () =>
    bands.map(value => <Band key={value.id} {...value} />);

  return (
    <Fragment>
      {isLoading && <Loader />}
      <Fragment>
        <h1>Bands</h1>
        {error ? error.message : listBands()}
      </Fragment>
    </Fragment>
  );
};

export default BandList;
