CREATE TABLE topic (
    id SERIAL PRIMARY KEY,
    Title varchar(255) NOT NULL,
    Descriptions varchar(255),
    TimeToMaster int,
    TimeSpent int,
    Source varchar(255),
    StartLearningDate TIMESTAMP,
    InProgress BOOLEAN
)