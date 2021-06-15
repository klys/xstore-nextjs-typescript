// exampli api
import { NextApiRequest, NextApiResponse, NextPageContext } from "next";

const Index = async (request: NextApiRequest, response: NextApiResponse) => {
  response.status(200).json('{"hello":"world"}');
};

export default Index;
