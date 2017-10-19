package com.arproject.arproject.repository;

import com.arproject.arproject.model.UserObject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserObjectRepository extends JpaRepository<UserObject, Integer> {
}
