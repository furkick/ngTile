angular.module("ngTile", []).constant('ngTileConfig',
    {
        defaultColors: ["#663399", "#2c3e50", "#95a5a6", "#26C281", "#D33257", "#87766C", "#A0B58D",
                    "#00B5B5", "#897FBA", "#953163", "#3E4651", "#2C82C9", "#FF6766", "#CD6B97", "#E67E22"]
    }
).factory('ngTileSettings', function (ngTileConfig) {
    return {
        setRandomColors: function (userColors, data) {

            // Setup our defaults
            var ourColors = angular.copy(ngTileConfig.defaultColors);
            var tileColors = [];

            // If user has own colors we will use them
            if (userColors != undefined) {
                ourColors = angular.copy(userColors);
            }

            // If we have no data its a single so fill the data with a single row
            if (data == undefined) {
                data = [""];
            }

            function myFunction(data, index) {
                if (ourColors.length == 0) {

                    // If its the users colors use them again
                    if (userColors != undefined) {
                        ourColors = angular.copy(userColors);
                    } else {
                        ourColors = angular.copy(ngTileConfig.defaultColors);
                    }
                };

                // Random number in the array
                var index = Math.random() * ourColors.length;
                var randomColor = ourColors[Math.floor(index)];

                // Remove the used color
                ourColors.splice(index, 1);

                // Add the color to our color array
                tileColors.push(randomColor);
            };

            return tileColors;
        }
    }
}
).directive('singleTile', function (ngTileSettings) {
    return {
        restrict: 'E',
        scope: true,
        link: function (scope, element, attrs) {
            scope.setRandomColors = ngTileSettings.setRandomColors(),
            scope.color = attrs.color
            scope.icon = attrs.icon,
            scope.stat = attrs.stat,
            scope.title = attrs.title,
            scope.tileType = attrs.tileType,
            scope.link = attrs.link,
            scope.target = attrs.target
        },
        template: `
            <a class ="{{link == undefined && 'noTileLink' || ''}}" href="{{link != undefined && link || 'javascript:;'}}" target="{{target}}" style="text-decoration: none;">
                <div class ="{{tileType}}" style="background-color: {{color != undefined && color || setRandomColors[0]}}" ng-href="link">
                    <div class ="iconPos"><i class ="{{icon}}"></i></div>
                    <p class ="middle"><b>{{stat}}</b></p>
                    <div class ="title"><b>{{title}}</b></div>
                </div>
            </a>`
    };
}
).directive('tiles', function (ngTileSettings) {
    return {
        restrict: 'E',
        scope: {
            tileParams: '='
        },
        link: function (scope, element, attrs) {
            scope.setRandomColors = ngTileSettings.setRandomColors(scope.tileParams.colors, scope.tileParams.data);
        },
        template: `
            <a ng-repeat="i in tileParams.data" class ="{{tileParams.data[$index].link == undefined && 'noTileLink' || ''}}" href="{{tileParams.data[$index].link != undefined && tileParams.data[$index].link || 'javascript:void(0)'}}" target="{{tileParams.data[$index].target}}" style="text-decoration: none;">
                <div class ="{{tileParams.colSize}} tileCol">
                       <div class ="{{tileParams.tileType}}" style="background-color: {{setRandomColors[$index]}}">
                            <div class="iconPos"><i class="{{i.icon}}"></i></div>
                            <p class="middle"><b>{{i.stat}}</b></p>
                            <div class="title"><b>{{i.title}}</b></div>
                        </div>
                   </div>
            </a>`
    };
});
