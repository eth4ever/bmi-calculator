# Deployen naar Clever Cloud

Volg deze stappen om de BMI-calculator te deployen naar Clever Cloud:

## Voorbereidingen

1. Maak een account aan op [Clever Cloud](https://www.clever-cloud.com/) als je die nog niet hebt
2. Installeer de Clever Cloud CLI tool:
   ```
   npm install -g clever-tools
   ```
3. Log in met de CLI tool:
   ```
   clever login
   ```

## Applicatie aanmaken op Clever Cloud

1. Maak een nieuwe applicatie aan:
   ```
   clever create --type node bmi-calculator
   ```

2. Koppel je lokale repository aan de Clever Cloud applicatie:
   ```
   clever link <app_id>
   ```

3. Voeg de nodige omgevingsvariabelen toe:
   ```
   clever env set PORT 8080
   ```

## Deployen

1. Push je code naar Clever Cloud:
   ```
   clever deploy
   ```

2. Open je applicatie in de browser:
   ```
   clever open
   ```

## Monitoring

Je kunt de logs van je applicatie bekijken met:
```
clever logs
```

En de status van je applicatie controleren met:
```
clever status
```