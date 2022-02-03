import React, { memo, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "red",
  },
}));

const MyWonderfulComponent = ({ id, options, children, count, value }) => {
  const [counter, setCounter] = useState(count);
  const isDynamic = options?.params?.fields?.isDynamic;
  const classes = useStyles();

  console.log(value);
  useEffect(() => {
    if (id && isDynamic) {
      setCounter((counter) => counter + 1);
    }
  }, [id, isDynamic]);

  return (
    <>
      <h1 className={classes.root}>Hello World!</h1>
      <Grid container>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item>{counter}</Grid>
      </Grid>
    </>
  );
};

export default memo(MyWonderfulComponent);
