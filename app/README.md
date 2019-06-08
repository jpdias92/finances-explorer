# FinancesExplorer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Debugging with VSCode

1. Install **Browser Preview** and **Debugger for Chrome** VSCode extensions
2. Go to the Debug tab on the left and add a new Configuration -> Browser Preview
3. On the launch.json file that will open, change the URL for the one where the application will be running (usually `http://localhost:4200`) and add the following new field after URL:

    ```"webRoot": "${workspaceFolder}/app"```

4. Make sure that the application is running (`ng serve`) and click start inside the Debug tab of VSCode. A window with your application should appear on the right

Reference: [Debugging Angular CLI Apps inside VSCode with Browser Preview](https://medium.com/@MarkPieszak/debugging-angular-cli-inside-vscode-with-browser-preview-8dcc4b18ed64)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Building and running the docker image

**Reference:** https://mherman.org/blog/dockerizing-an-angular-app/

1. Build the image with `docker build -t finances-explorer-ui:dev .`. This will yield the `finances-explorer-ui:dev` image.

2. Run it with `docker run -d -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --rm finances-explorer-ui:dev`. The UI will then be running on `http://localhost:4201/`.

   * `-v ${PWD}:/app` mounts the code into the container at “/app”. {PWD} may not work on Windows. See this Stack Overflow question for more info.

   * Since we want to use the container version of the “node_modules” folder, we configured another volume: `-v /app/node_modules`. You should now be able to remove the local “node_modules” flavor.

   * `-p 4201:4200` exposes port 4200 to other Docker containers on the same network (for inter-container communication) and port 4201 to the host.

   * Finally, `--rm` removes the container and volumes after the container exits.

### Running unit tests inside the container

```
docker exec -it <container_id>  ng test --watch=false
```

### Running end-to-end tests inside the container

```
docker exec -it <container_id> ng e2e --port 4202
```
