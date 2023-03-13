import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);

describe('POST /weather/:cityName', () => {
  describe('given a city name,', () => {
    it('should respond with a 200 status code', async () => {
      const response = await request.post('/weather/london');
      expect(response.statusCode).toEqual(200);
    });

    it('should specify "json" in the content type header', async () => {
      const response = await request.post('/weather/london');
      expect(response.headers['content-type']).toContain('json');
    });

    it('should respond with a 404 status code if city name is not found', async () => {
      const response = await request.post(
        '/weather/gibberishCityNamesssss'
      );
      expect(response.statusCode).toEqual(404);
    });

    it('should respond with a 404 status code if no city name is provided', async () => {
      const response = await request.post('/weather/');
      expect(response.statusCode).toEqual(404);
    });
  });
});
