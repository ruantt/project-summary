package org.csu.jpetstore_ssm.persistence;

import org.csu.jpetstore_ssm.domain.Sequence;
import org.springframework.stereotype.Repository;


@Repository
public interface SequenceMapper {
    Sequence getSequence(Sequence sequence);
    void updateSequence(Sequence sequence);
}
