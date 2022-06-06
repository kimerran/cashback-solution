
curl -XPOST -H "Content-Type: application/json" \
-d '{
"startDate":"2020-04-10",
"endDate":"2020-05-10",
"cashback": 2.0,
"redemptionLimit": 10
}' \
localhost:3000/ruleset

curl -XPOST -H "Content-Type: application/json" \
-d '{
"startDate":"2020-04-29",
"endDate":"2020-05-09",
"cashback": 5.0,
"redemptionLimit": 10
}' \
localhost:3000/ruleset



curl -XPOST -H "Content-Type: application/json" \
-d '{
"startDate":"2020-01-10",
"endDate":"2020-02-10",
"amount": 1.0
}' \
localhost:3000/cashback


curl -XPOST -H "Content-Type: application/json" \
-d '{
"date":"2020-03-01",
"id": 1
}' \
localhost:3000/transaction

curl -XPOST -H "Content-Type: application/json" \
-d '{
"date":"2020-02-01",
"id": 2
}' \
localhost:3000/transaction

curl -XPOST -H "Content-Type: application/json" \
-d '{
"date":"2020-05-01",
"id": 3
}' \
localhost:3000/transaction