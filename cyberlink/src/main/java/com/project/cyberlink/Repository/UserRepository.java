package com.project.cyberlink.Repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.cyberlink.Models.UsersModel;


@Repository
public interface UserRepository extends JpaRepository<UsersModel, UUID>{

}
