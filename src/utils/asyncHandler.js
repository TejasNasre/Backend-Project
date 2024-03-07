const asyncHandler = (fn) => async (req, res) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export default asyncHandler;

/*
const asyncHandler = (requestHandler) => {
    (req,res,next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(err => next(err);
    }
}

Another Method For Writting The AsyncHandler Function In JavaScript
*/

/*
By Use Of Promise.resolve() Method

const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(err => next(err);
    }  
}

Another Method For Writting The AsyncHandler Function In JavaScript
*/
