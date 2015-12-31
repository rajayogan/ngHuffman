/**
 * Created by rajayogan on 1/1/16.
 */
angular.module('demoApp', ['ngHuffman'])

.controller('demoCtrl', function($scope, huff){
        $scope.inputtext = '';
        $scope.result = '';

        $scope.encode = function(text){
            $scope.inputtext = text;
            var Huffman = huff;
            var huffman = Huffman.treeFromText(text);
            var treeEncoded = huffman.encodeTree();
            var encoded = huffman.encode(text);
            $scope.result = encoded;
            var decoded = huffman.decode(encoded);
        }
    });