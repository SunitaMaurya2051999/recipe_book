# recipe_book
This project store data regarding recipe


# Creating model using cli 2 steps:
# 1. Migration (delete migration file after model created)
npx sequelize-cli migration:generate --name entity --migrations-path sequelize/migrations
# 2. Model
npx sequelize-cli model:generate --name entity --attributes firstname:string,lastname:string --models-path sequelize/models