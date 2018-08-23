# streamsets with cratedb

## How to Run

* Run

```code
docker-compose up -d
```

## How to use

* install jdbc library

```code
from
https://bintray.com/crate/crate/crate-jdbc/view/files/io/crate/crate-jdbc-standalone
```

* upload library

> i have download the library && it in data directory

```code

with extenal library upload (select stage libray jdbc)
```

* copy csv file to streamsets data directory

```code
docker cp data/  second_sets_1:/data/csv

```

* config stage
  
```code

load  data/cratedb-demo.json  for look
```