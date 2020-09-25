module.exports = {
  response: (response, status, msg, data, pagination, others) => {
    const result = {};
    result.status = status || 200;
    result.msg = msg;
    result.data = data;
    result.pagination = pagination;
    result.others = others;

    return response.status(result.status).json(result);
  },
};
