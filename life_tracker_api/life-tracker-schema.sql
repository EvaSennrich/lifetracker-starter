CREATE TABLE users (
  id            SERIAL PRIMARY KEY,
  password      TEXT NOT NULL,
  first_name    TEXT NOT NULL,
  last_name     TEXT NOT NULL,
  email         TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  created_at    TIMESTAMP NOT NULL DEFAULT NOW()   
);

CREATE TABLE exercise (
  id            SERIAL PRIMARY KEY,
  name          TEXT NOT NULL,
  category      TEXT NOT NULL,
  duration      INTEGER,
  intensity     INTEGER,
  user_id       INTEGER NOT NULL, 
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  created_at    TIMESTAMP NOT NULL DEFAULT NOW()   
);

CREATE TABLE nutrition (
  id            SERIAL PRIMARY KEY,
  name          TEXT NOT NULL,
  category      TEXT NOT NULL,
  quantity      INTEGER,
  calories      INTEGER,
  image_url     TEXT,
  user_id       INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  created_at    TIMESTAMP NOT NULL DEFAULT NOW()   
);

CREATE TABLE sleep (
  id            SERIAL PRIMARY KEY,
  start_time    TIMESTAMP NOT NULL,
  end_time      TIMESTAMP NOT NULL,
  user_id       INTEGER NOT NULL, 
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  created_at    TIMESTAMP NOT NULL DEFAULT NOW()   
);