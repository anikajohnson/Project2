create table young_to_elder (
	index INT PRIMARY KEY not null,
	Country text,
	Year text,
	Young int,
	Working_Age int,
	Elder int
);

CREATE TABLE un_sex_population (
index INT PRIMARY KEY not null,
    Year TEXT,
    r_0_4 int,
    r_5_9 int,
    r_10_14 int,
    r_15_19 int,
    r_20_24 int,
    r_25_29 int,
    r_30_34 int,
    r_35_39 int,
    r_40_44 int,
    r_45_49 int,
    r_50_54 int,
    r_55_59 int,
    r_60_64 int,
    r_65_69	int,
    r_70_74 int,
    r_75_79 int,
    r_80_84 int,
    r_85_89 int,
    r_90_94 int,
    r_95_99 int,
    r_100_105 int,
    Sex TEXT
);