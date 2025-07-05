const express = require('express');
const newsRouter = require('./routes/news');
const analysisRouter = require('./routes/analysis');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/news', newsRouter);
app.use('/api/analyze', analysisRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
