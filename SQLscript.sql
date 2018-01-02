-- MySQL Script generated by MySQL Workbench
-- Mon Dec 18 20:33:11 2017
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema rpgdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema rpgdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rpgdb` DEFAULT CHARACTER SET utf8 ;
USE `rpgdb` ;

-- -----------------------------------------------------
-- Table `rpgdb`.`inimigos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rpgdb`.`inimigos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `tipo` INT NULL,
  `PVbase` INT NULL,
  `nivelbase` INT NULL,
  `DF` INT NULL,
  `DM` INT NULL,
  `DN` INT NULL,
  `DD` INT NULL,
  `AF` INT NULL,
  `AM` INT NULL,
  `AN` INT NULL,
  `AD` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rpgdb`.`ataques`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rpgdb`.`ataques` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `tipo` INT NULL,
  `sucesso` INT NULL,
  `danobase` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rpgdb`.`aliados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rpgdb`.`aliados` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `apelido` VARCHAR(45) NULL,
  `tipo` INT NULL,
  `PV` INT NULL,
  `nivel` INT NULL,
  `DF` INT NULL,
  `DM` INT NULL,
  `DN` INT NULL,
  `DD` INT NULL,
  `AF` INT NULL,
  `AM` INT NULL,
  `AN` INT NULL,
  `AD` INT NULL,
  `ataque1` INT NOT NULL,
  `ataque2` INT NOT NULL,
  `ataque3` INT NOT NULL,
  `ataque4` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_aliados_ataques_idx` (`ataque1` ASC),
  INDEX `fk_aliados_ataques1_idx` (`ataque2` ASC),
  INDEX `fk_aliados_ataques2_idx` (`ataque3` ASC),
  INDEX `fk_aliados_ataques3_idx` (`ataque4` ASC),
  CONSTRAINT `fk_aliados_ataques`
    FOREIGN KEY (`ataque1`)
    REFERENCES `rpgdb`.`ataques` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_aliados_ataques1`
    FOREIGN KEY (`ataque2`)
    REFERENCES `rpgdb`.`ataques` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_aliados_ataques2`
    FOREIGN KEY (`ataque3`)
    REFERENCES `rpgdb`.`ataques` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_aliados_ataques3`
    FOREIGN KEY (`ataque4`)
    REFERENCES `rpgdb`.`ataques` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rpgdb`.`areas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rpgdb`.`areas` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rpgdb`.`inimigos-areas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rpgdb`.`inimigos-areas` (
  `inimigos_id` INT NOT NULL,
  `areas_id` INT NOT NULL,
  PRIMARY KEY (`inimigos_id`, `areas_id`),
  INDEX `fk_inimigos_has_areas_areas1_idx` (`areas_id` ASC),
  INDEX `fk_inimigos_has_areas_inimigos1_idx` (`inimigos_id` ASC),
  CONSTRAINT `fk_inimigos_has_areas_inimigos1`
    FOREIGN KEY (`inimigos_id`)
    REFERENCES `rpgdb`.`inimigos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_inimigos_has_areas_areas1`
    FOREIGN KEY (`areas_id`)
    REFERENCES `rpgdb`.`areas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
