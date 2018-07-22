/*
 Navicat Premium Data Transfer

 Source Server         : suyu
 Source Server Type    : MySQL
 Source Server Version : 50560
 Source Host           : 120.78.149.247:3306
 Source Schema         : nodejs

 Target Server Type    : MySQL
 Target Server Version : 50560
 File Encoding         : 65001

 Date: 21/07/2018 22:17:39
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `sex` varchar(2) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `age` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '李易峰', '男', 28);
INSERT INTO `user` VALUES (2, '赵丽颖', '女', 26);
INSERT INTO `user` VALUES (3, '刘德华', '男', 56);
INSERT INTO `user` VALUES (4, '郭德纲', '男', 40);
INSERT INTO `user` VALUES (5, '林志颖', '男', 40);
INSERT INTO `user` VALUES (6, '张翰', '男', 30);
INSERT INTO `user` VALUES (7, '古力娜扎', '女', 26);
INSERT INTO `user` VALUES (8, '迪丽热巴', '女', 24);
INSERT INTO `user` VALUES (9, '郑爽', '女', 26);
INSERT INTO `user` VALUES (10, '杨幂', '女', 30);
INSERT INTO `user` VALUES (11, '杨颖', '女', 30);
INSERT INTO `user` VALUES (12, '鹿晗', '男', 28);

SET FOREIGN_KEY_CHECKS = 1;
