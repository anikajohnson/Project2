create table young_to_elder (
	index INT PRIMARY KEY not null,
	country text,
	year text,
	young int,
	working_Age int,
	elder int
);

CREATE TABLE un_sex_population (
index INT PRIMARY KEY not null,
    year TEXT,
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
    sex TEXT
);

create table age_ratio_population (
	index INT PRIMARY KEY not null,
	year text,
	r_15_year_olds int,
	r_20_year_olds int,
	r_30_year_olds int,
	r_40_year_olds int,
	r_50_year_olds int,
	r_60_year_olds int,
	r_70_year_olds int,
	r_80_year_olds int,
	r_90_year_olds int,
	r_100_year_olds int
);
