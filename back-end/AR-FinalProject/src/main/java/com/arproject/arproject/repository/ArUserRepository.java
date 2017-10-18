package com.arproject.arproject.repository;

import com.arproject.arproject.model.ArUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArUserRepository extends JpaRepository<ArUser, Integer> {
}
