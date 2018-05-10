CREATE TABLE "genres" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(25) NOT NULL
);

CREATE TABLE "movies" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(120) NOT NULL,
	"genre_id" INT REFERENCES "genres" NOT NULL,
	"release_date" DATE NOT NULL,
	"run_time" INT NOT NULL,
	"image" VARCHAR(1000)
);

INSERT INTO "genres" ("name") VALUES
('Action'),			--1
('Action-Comedy'),	--2
('Adventure'),		--3
('Animation'),		--4
('Biography'),		--5
('Comedy'),			--6
('Comedy-Romance'),	--7
('Crime'),			--8
('Documentary'),	--9
('Drama'),			--10
('Family'),			--11
('Fantasy'),		--12
('Film Noir'),		--13
('History'),		--14
('Horror'),			--15
('Music'),			--16
('Musical'),		--17
('Mystery'),		--18
('Romance'),		--19
('Sci-Fi'),			--20
('Short'),			--21
('Sport'),			--22
('Superhero'),		--23
('Thriller'),		--24
('War'),			--25
('Western');		--26

INSERT INTO "movies" ("name", "genre_id", "release_date", "run_time", "image") VALUES
('Avengers: Infinity War', '1', '2018-04-27', '149', 'avengers-infinity-war.jpg'),
('Black Panther', '1', '2018-02-16', '134', 'black-panther.jpg'),
('Thor: Ragnarok', '1', '2017-11-03', '130', 'thor-ragnarok.jpg'),
('Cobra Kai', '2', '2018-05-02', '30', 'cobra-kai.jpg'),
('Jumanji: Welcome to the Jungle', '2', '2017-12-20', '119', 'jumanji-welcome-to-the-jungle.jpg'),
('Deadpool', '2', '2016-02-12', '108', 'deadpool.jpg'),
('Solo: A Star Wars Story', '3', '2018-05-25', '135', 'solo-a-star-wars-story.jpg'),
('Ready Player One', '3', '2018-03-29', '140', 'ready-player-one.jpg'),
('Avengers: Age of Ultron', '3', '2015-05-01', '141', 'avengers-age-of-ultron.jpg'),
('Peter Rabbit', '4', '2018-02-09', '95', 'peter-rabbit.jpg'),
('Isle of Dogs', '4', '2018-04-13', '101', 'isle-of-dogs.jpg'),
('Coco', '4', '2017-11-21', '105', 'coco.jpg'),
('The Greatest Showman', '5', '2017-12-20', '105', 'the-greatest-showman.jpg'),
('Winchester', '5', '2018-02-02', '99', 'winchester.jpg'),
('The Post', '5', '2018-01-12', '116', 'the-post.jpg'),
('Overboard', '6', '1987-12-16', '106', 'overboard.jpg'),
('I Feel Pretty', '6', '2018-04-20', '110', 'i-feel-pretty.jpg'),
('Blockers', '6', '2018-04-06', '102', 'blockers.jpg'),
('Love, Simon', '7', '2018-03-16', '110', 'love-simon.jpg'),
('Sherlock Gnomes', '7', '2018-03-23', '86', 'sherlock-gnomes.jpg'),
('Scott Pilgrim vs. the World', '7', '2010-08-13', '112', 'scott-pilgrim-vs-the-world.jpg'),
('Den of Thieves', '8', '2018-01-19', '140', 'den-of-thieves.jpg'),
('Super Troopers 2', '8', '2018-04-20', '99', 'super-troopers-2.jpg'),
('Game Night', '8', '2018-02-23', '100', 'game-night.jpg'),
('McQueen', '9', '2018-05-18', '111', 'mcqueen.jpg'),
('Avicii: True Stories', '9', '2017-10-26', '97', 'avicii-true-stories.jpg'),
('Operation Odessa', '9', '2018-03-09', '95', 'operation-odessa.jpg'),
('A Quiet Place', '10', '2018-04-06', '90', 'a-quiet-place.jpg'),
('Hostiles', '10', '2018-01-26', '134', 'hostiles.jpg'),
('Red Sparrow', '10', '2018-03-02', '140', 'red-sparrow.jpg'),
('Lost in Space', '11', '1998-04-03', '130', 'lost-in-space.jpg'),
('Wonder', '11', '2017-11-17', '113', 'wonder.jpg'),
('Ferdinand', '11', '2017-12-15', '108', 'ferdinand.jpg'),
('Doctor Strange', '12', '2016-11-04', '115', 'doctor-strange.jpg'),
('Star Wars: The Last Jedi', '12', '2017-12-15', '152', 'star-wars-the-last-jedi.jpg'),
('Justice League', '12', '2017-11-17', '120', 'justice-league.jpg'),
('Hollow Triumph', '13', '1949-02-03', '83', 'hollow-triumph.jpg'),
('Sunset Boulevard', '13', '1950-09-29', '110', 'sunset-boulevard.jpg'),
('Laura', '13', '1944-11-01', '88', 'laura.jpg'),
('12 Strong', '14', '2018-01-19', '130', '12-strong.jpg'),
('Dunkirk', '14', '2017-07-21', '106', 'dunkirk.jpg'),
('Darkest Hour', '14', '2017-12-22', '125', 'darkest-hour.jpg'),
('Truth or Dare', '15', '2018-04-13', '100', 'truth-or-dare.jpg'),
('Annihilation', '15', '2018-02-23', '115', 'annihilation.jpg'),
('Bad Samaritan', '15', '2018-05-04', '110', 'bad-samaritan.jpg'),
('Pitch Perfect 3', '16', '2017-12-22', '93', 'pitch-perfect-3.jpg'),
('Forever My Girl', '16', '2018-01-19', '108', 'forever-my-girl.jpg'),
('Baby Driver', '16', '2017-06-28', '112', 'baby-driver.jpg'),
('Beauty and the Beast', '17', '2017-03-17', '129', 'beauty-and-the-beast.jpg'),
('Moana', '17', '2016-11-23', '107', 'moana.jpg'),
('Sing', '17', '2016-12-21', '108', 'sing.jpg'),
('You Were Never Really Here', '18', '2018-04-06', '89', 'you-were-never-really-here.jpg'),
('The Commuter', '18', '2018-01-12', '105', 'the-commuter.jpg'),
('Blade Runner 2049', '18', '2017-10-06', '164', 'blade-runner-2049.jpg'),
('Disobedience', '19', '2018-04-27', '114', 'disobedience.jpg'),
('Call Me by Your Name', '19', '2018-01-19', '132', 'call-me-by-your-name.jpg'),
('Fifty Shades Freed', '19', '2018-02-09', '105', 'fifty-shades-freed.jpg'),
('The Avengers', '20', '2012-05-04', '143', 'the-avengers.jpg'),
('Guardians of the Galaxy', '20', '2014-08-01', '121', 'guardians-of-the-galaxy.jpg'),
('Spider-Man: Homecoming', '20', '2017-07-07', '133', 'spider-man-homecoming.jpg'),
('Darth Maul: Apprentice', '21', '2016-03-05', '18', 'darth-maul-apprentice.jpg'),
('Auditorium 6', '21', '2017-10-25', '35', 'auditorium-6.jpg'),
('Pandas', '21', '2018-04-06', '40', 'pandas.jpg'),
('I, Tonya', '22', '2018-01-19', '120', 'i-tonya.jpg'),
('The Karate Kid', '22', '1984-06-22', '126', 'the-karate-kid.jpg'),
('Bring It On', '22', '2000-08-25', '98', 'bring-it-on.jpg'),
('Iron Man', '23', '2008-05-02', '126', 'iron-man.jpg'),
('Ant-Man', '23', '2015-07-17', '117', 'ant-man.jpg'),
('Wonder Woman', '23', '2017-06-02', '141', 'wonder-woman.jpg'),
('Maze Runner: The Death Cure', '24', '2018-01-26', '141', 'maze-runner-the-death-cure.jpg'),
('Anon', '24', '2018-05-04', '100', 'anon.jpg'),
('It', '24', '2017-09-08', '135', 'it.jpg'),
('The Yellow Birds', '25', '2017-01-21', '110', 'the-yellow-birds.jpg'),
('Hacksaw Ridge', '25', '2016-11-04', '139', 'hacksaw-ridge.jpg'),
('Full Metal Jacket', '25', '1987-07-10', '116', 'full-metal-jacket.jpg'),
('The Dark Tower', '26', '2017-08-04', '95', 'the-dark-tower.jpg'),
('The Hateful Eight', '26', '2015-12-30', '187', 'the-hateful-eight.jpg'),
('Django Unchained', '26', '2012-12-25', '165', 'django-unchained.jpg');