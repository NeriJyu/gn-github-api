import express from "express";

const formatErrors = (err: any): { status: number; errMessage: string } => {
  let errMessage = err;
  let status = 400;

  if (err?.response?.data) errMessage = err.response.data;

  if (err?.response?.data?.message) errMessage = err.response.data.message;

  if (err?.response?.status) status = err.response.status;

  return { status, errMessage };
};

export const handleError = (
  err: any,
  res: express.Response,
  errTitle: string
) => {
  const formattedErrors = formatErrors(err);

  res.status(formattedErrors.status).send({
    status: "ERROR",
    err: errTitle,
    message: formattedErrors.errMessage,
  });
};
